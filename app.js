document.addEventListener('alpine:init', () => {
        Alpine.data('products', () => ({
            items: [
                {id: 1, name: 'Aging Advance Repair Serum', img: 'resizecom_br1.jpg', price: 1050000 },
                {id: 2, name: 'The Body Crème', img: 'resizecom_br2f.jpg', price: 580000 },
                {id: 3, name: 'Ceramide Complex Bond Repair Shampoo & Conditioner', img: 'resizecom_br3.jpg', price: 780000 },
                {id: 4, name: 'Forever Skin Glow Hydrating Radiant Foundation', img: 'resizecom_br4.jpg', price: 1100000 },
                {id: 5, name: 'Libre Eau de Parfum', img: 'resizecom_br5.jpg', price: 2500000 }
            ]
        }))

        
        Alpine.store('cart', {
            items: [],
            total: 0,
            quantity: 0,
            add(newItem) {
                // Cek apabila ada barang yang sama
                const cartItem = this.items.find((item) => item.id == newItem.id);

                // Bila belum ada (cart nya masih kosong)
                if (!cartItem) {
                    this.items.push({...newItem, quantity: 1, total: newItem.price});
                    this.quantity++;
                    this.total += newItem.price;
                } else {
                    // Bila barang sudah ada di cart, cek apakah barangnya beda atau sama dengan yang ada di cart
                    this.items = this.items.map((item) => {
                        // Bila barangnya berbeda
                        if(item.id !== newItem.id) {
                            return item;
                        } else {
                            // Bila barang sudah ada, maka tambah quantity dan totalnya
                            item.quantity++;
                            item.total = item.price * item.quantity;
                            this.quantity++;
                            this.total += item.price;
                            return item;
                        }
                    });
                }
            },
            remove(id) {
                // Ambil item yang ingin diremove berdasarkan id
                const cartItem = this.items.find((item) => item.id == id);

                // Bila barang di cart > 1
                if(cartItem.quantity > 1) {
                    // Cek satu persatu
                    this.items = this.items.map((item) => {
                        // Bila bukan barang yang diklik
                        if(item.id !== id) {
                            return item;
                        } else {
                            item.quantity--;
                            item.total = item.price * item.quantity;
                            this.quantity--;
                            this.total -= item.price;
                            return item;
                        }
                    });
                } else if(cartItem.quantity === 1) {
                    // Jika barang bersisa 1
                    this.items = this.items.filter((item) => item.id !== id);
                    this.quantity--;
                    this.total -= cartItem.price;
                }
            }
        });
    });

// Konversi ke Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0

    }).format(number);
}
