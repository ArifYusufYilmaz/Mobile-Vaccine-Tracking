
export default function DateFormatter(date) {
        date = date.toISOString().split('T')[0]
        return date;
}


export function AddToDate(date, incrementMonth, incrementYear){

        const reFormattedDate = new Date(date);
        reFormattedDate.setDate(reFormattedDate.getDate() + incrementMonth * 30 + incrementYear * 365)

        const newDate =  DateFormatter(reFormattedDate);
        const year = newDate.split('-')[0];
        const month =  newDate.split('-')[1];
        const day = newDate.split('-')[2];

        const dateString = day + "/" + month + "/" + year;
        return dateString;
   
        //     let newDay, newMonth, newYear;
    
    
//     if(parseInt(month) > (12-incrementMonth)){
//         newMonth = parseInt(month) - 12;
//         newMonth +=incrementMonth;
//         newYear = parseInt(year) + 1;
        
//      }
//     else{
//         newMonth = parseInt(month) + incrementMonth;
//         newYear = parseInt(year);
//     } 
//     if(newMonth < 10){
//         newMonth = "0" + newMonth.toString();
//     }
//     newDay = day;
//     if(incrementYear > 0 ){
//         newYear += incrementYear;
//     } 
//     newYear.toString();
//     const dateString = newDay + "/" + newMonth + "/" + newYear;
//     return dateString;
}