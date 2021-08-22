import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['Marvel', 'TWD', 'Flash'];
    const [categories, setCategories] = useState(['Harry Potter'])

    // const handleAdd = () => {
    //     const nueva = 'GOT';
    //     setCategories([...categories, nueva]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category, i) =>
                        <GifGrid
                            category={category}
                            key={category}
                        />
                    )
                }
            </ol>
        </>
    );

}

export default GifExpertApp;