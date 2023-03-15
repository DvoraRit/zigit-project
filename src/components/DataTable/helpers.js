
// This function is used to format the data in the table
//in case the data is not a string you need to return a react component

export const formatData = ({
    cell
})=>{
   
    switch (cell.column.id) {
        case "madeDadeline":
            if(cell.value){
                return (
                    <span>
                        true
                    </span>
                );
            }else{
                return (
                    <span>
                        false
                    </span>
                );      
            }
        case "avatar":
            return <img src={cell.value} style={{ maxHeight: 45 }} alt='' />; 
        default:
            return (
                <span>
                    {cell.render('Cell')}
                </span>
            );
    }
}