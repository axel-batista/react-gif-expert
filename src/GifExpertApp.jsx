import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["synthWave aesthetic"]);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) {
			return;
		}

		setCategories([newCategory, ...categories]);

		//setCategories((cats) => [...cats, "Submarines"]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onNewCategory={onAddCategory} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
