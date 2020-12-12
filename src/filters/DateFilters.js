export default {
    formatDate(d) {
        let date = new Date(d);
        return date.toLocaleDateString();
    }
}