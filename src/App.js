import React, { useEffect } from "react";

import "./App.css";
import { initializeTreeArray } from "array-of-trees";

function test() {
	const randomSequence26 = [
		17, 8, 21, 13, 10, 25, 7, 18, 3, 19, 9, 4, 14, 11, 1, 16, 2, 12, 22, 15, 24,
		20, 5, 0, 23, 6,
	];
	let bigA = 65;
	let testData = [];
	for (let i = bigA; i < bigA + 26; i++) {
		if (i === "B".charCodeAt()) {
			testData.push({
				charCode: "B".charCodeAt(),
				letter: "B",
				parentCharCode: "A".charCodeAt(),
			});
		} else if (i === "Q".charCodeAt()) {
			testData.push({
				charCode: "Q".charCodeAt(),
				letter: "Q",
				parentCharCode: "C".charCodeAt(),
			});
		} else if (i === "F".charCodeAt()) {
			testData.push({
				charCode: "F".charCodeAt(),
				letter: "F",
				parentCharCode: "B".charCodeAt(),
			});
		} else if (i === "T".charCodeAt()) {
			testData.push({
				charCode: "T".charCodeAt(),
				letter: "T",
				parentCharCode: "B".charCodeAt(),
			});
		} else if (i === "Z".charCodeAt()) {
			testData.push({
				charCode: "Z".charCodeAt(),
				letter: "Z",
				parentCharCode: "C".charCodeAt(),
			});
		} else {
			testData.push({
				charCode: i,
				letter: String.fromCharCode(i),
				parentCharCode: null,
			});
		}
	} /// TEST DATA READY!!!

	for (let i = 0; i < 25; i++) {
		const j = randomSequence26[i];
		const k = randomSequence26[i + 1];
		const temp = testData[j];
		testData[j] = testData[k];
		testData[k] = temp;
	} /// TEST DATA SHUFFLED

	const idKey = "charCode";
	const parentKey = "parentCharCode";
	const items = testData;

	const theTreeArray = initializeTreeArray(
		items,
		idKey,
		parentKey,
		"children",
		"parentItem"
	);

	const theTreeArrayWithoutParentKey = initializeTreeArray(
		items,
		idKey,
		parentKey
	);

	console.log(
		"testData",
		testData.sort((a, b) => {
			return a.charCode > b.charCode;
		})
	);
	console.log(`
	B child of A
	F child of B
	T child of B
	Q child of C
	Z child of C
	`);
	console.log("theTreeArray", theTreeArray);
	console.log("theTreeArrayWithoutParentKey", theTreeArrayWithoutParentKey);
}

function App() {
	useEffect(() => {
		test();
	});

	return (
		<div className="App">
			<header className="App-header">
				<p>
					<b>Array of Trees Example</b>
					<br />
					<b>Press F12 Look the Console</b>
				</p>
			</header>
		</div>
	);
}

export default App;
