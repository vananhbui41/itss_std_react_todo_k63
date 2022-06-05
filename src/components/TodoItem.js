import React, { useState } from 'react';
// import '../styles/check.css';

/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item}) {
	const [checked, setChecked] = React.useState(item.done)
	const handleClick = () => {
		// console.log('long')
		setChecked(!checked)
	}
  return (
    <label className="panel-block">
			<input type="checkbox"  onClick = {handleClick}/>
			<p class={checked ? 'has-text-grey' : 'normal'}>{item.text}</p>
    </label>
  );
}

function myFunction(){
	var document
}

export default TodoItem;