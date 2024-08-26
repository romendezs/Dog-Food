var selected = [1,2]

const SelectedImage = () =>{
    
    selected[0]++

    switch(selected[0]){
        case 1:
            selected = [1,2]
            break
        case 2:
            selected = [2,3]
            break

        case 3:
            selected = [3,4]
            break

        case 4:
            selected = [4,1]
            break

        case 5:
            selected = [1,2]
            break

    }
    return selected
}

export default SelectedImage()