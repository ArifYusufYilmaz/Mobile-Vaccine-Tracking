
export default function DateFormatter(date) {
        date = date.toISOString().split('T')[0]
        return date;
}