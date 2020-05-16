// I is the type used for index, when using CouchDB directly it is {_id: string;}.
// D is the type used for the real data of the node
// P is the type used for parentIndex, when using a flatNodeList structure with CouchDB it could be {pid: string;}

export type Tree<I, D> = I & D & { treeList?: Tree<I, D>[] };

export const forEachTree = <I, D>(tree: Tree<I, D>, command: (tree: Tree<I, D>, step: number) => I & D, step = 0): Tree<I, D> => ({
	...command(tree, step),
	treeList: Array.isArray(tree.treeList) && tree.treeList.length > 0 ? tree.treeList.map((child) => forEachTree<I, D>(child, command, step + 1)) : undefined
});

// ref: https://hackernoon.com/you-might-not-need-that-recursive-function-in-javascript-275651522185
export const treeListFromFlatNodeList = <I, P, D>(idKey: string, parentIdKey: string, flatNodeList: (I & P & D)[]) => {
	const builtTreeList: Tree<I, D>[] = [];
	const map: { [parentId: string]: number } = {};
	flatNodeList.forEach((flatNode) => {
		if (!flatNode[parentIdKey]) return builtTreeList.push(<Tree<I, D>>(<any>flatNode));
		let parentIndex = map[flatNode[parentIdKey]];
		if (typeof parentIndex !== 'number') {
			parentIndex = flatNodeList.findIndex((_flatNode) => _flatNode[idKey] === flatNode[parentIdKey]);
			map[flatNode[parentIdKey]] = parentIndex;
		}
		if (!(<Tree<I, D>>(<any>flatNodeList[parentIndex])).treeList) {
			return ((<Tree<I, D>>(<any>flatNodeList[parentIndex])).treeList = [<Tree<I, D>>(<any>flatNode)]);
		}
		(<Tree<I, D>>(<any>flatNodeList[parentIndex])).treeList.push(<Tree<I, D>>(<any>flatNode));
	});
	return builtTreeList;
};
