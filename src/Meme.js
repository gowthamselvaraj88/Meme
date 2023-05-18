import { useState, useEffect } from "react"
import './meme.css';

const Meme = () => {

    const [InputText, setInputText] = useState({
        firsttextbox: "",
        secondtextbox: ""
    })

    const handleSubmit = (e) => {
        let allimgs;
        e.preventDefault()
        console.log("Submit button is clicked")
        const num = allimgs.length
        console.log(num)

        // allimgs[0]
    }

    const handleChange = (e) => {
        console.log("handle function is called")
        setInputText({
            ...InputText,
            [e.target.name]: [e.target.value]
        })
    }
    const [imgsrc, setimgsrc] = useState([]);
    const [randomimg, setrandoming] = useState(
        {
            id: "",
            url: ""

        });
    useEffect(() => {
        console.log("working")
        fetch("https://api.imgflip.com/get_memes").then
            (responce => responce.json()).then
            (responce => setimgsrc(responce.data.memes))
    }, [])
    const handleclicking = (e) => {
        e.preventDefault()
        console.log("its working")
        const img = imgsrc.length
        console.log(img)
        const rimg = imgsrc[Math.floor(Math.random() * 100)]
        console.log(rimg)
        setrandoming({
            ...randomimg,
            id: rimg.id,
            url: rimg.url
        })
    }
    return (
        <div className="meme-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firsttextbox"
                    placeholder="Enter the first value"
                    value={InputText.firsttextbox}
                    onChange={handleChange} />
                <input
                    type="text"
                    name="secondtextbox"
                    placeholder="Enter the second value"
                    value={InputText.secondtextbox}
                    onChange={handleChange} />

                <button type="submit" onClick={handleclicking}>Create Meme</button>
            </form>

            <div>
                <h2>{InputText.firsttextbox}</h2>
                <img src={randomimg.url}/>
                <h2>{InputText.secondtextbox}</h2>
            </div>
           
        </div>
    
   
)
}
export default Meme
