import axios from 'axios'

export class ProductRepository {

    url = 'https://api.johnlawrimore.com/store/products'

    config = {
        headers: {
            Authorization: 'jzhai'
        }
    };

    getProducts(){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
        });
    }

    getProduct(productId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${productId}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
        });
    }

    addReview(productId, review) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/${productId}/reviews`, review, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
            });
        });
    }
}
