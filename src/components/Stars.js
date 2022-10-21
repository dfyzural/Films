
import Star from "./Star";
import shortid from "shortid";

function Stars({ count }) {
    let a = [];
    if (count > 0 && count < 6) {

        for (let i = 0; i < count; i++) a.push(shortid.generate())

        return (
            < ul className="card-body-stars u-clearfix" >
                {a.map((id) => (
                    <li key={id}>
                        <Star />
                    </li>
                ))}
            </ul >
        )
    }
    else return null
}

export default Stars;