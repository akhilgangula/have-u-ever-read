class DataStore {
    constructor() {
        this.data = {};
    }
    getData(bookId) {
        return this.data[bookId];
    }
    addData({ bookId, userId, comment, commentId, ratings }) {
        if(!this.data[bookId]) {
            this.data[bookId] = [];
        }
        this.data[bookId].push({ userId, comment, commentId, ratings });
        return this.data[bookId];
    }
    clearData() {
        this.data = {};
    }
}
const store = new DataStore();
export default store;

/**
 * data = {
 *      bookId: [
 *          {
 *          userId:
 *          commentId:
 *          comment:
 *          rating
 *       },
 *        {
 * 
 *          }
 *      ]
 * }
 */