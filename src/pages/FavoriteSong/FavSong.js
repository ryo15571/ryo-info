import React, {Fragment} from "react";

const FavSong = () => {
    return (
        <div>
        <div className="pt-28 pb-5 text-center font-bold text-2xl">เพลงโปรด ณ ช่วงเวลานี้</div>
        <div className="py-8 px-20 grid grid-cols-2 justify-between">
        <iframe width="480" height="320" src="https://www.youtube.com/embed/cg93Z3si7iA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="480" height="320" src="https://www.youtube.com/embed/fAKzMnoh-n8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
        </div>
    )
}

export default FavSong