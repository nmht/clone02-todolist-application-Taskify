import React, { useRef } from "react";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
	const inputRef: any = useRef<HTMLInputElement>(null);

	return (
		<form
			className="form"
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}
		>
			<input
				ref={inputRef}
				type="input"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder="Enter a task"
				className="input"
			/>
			<button className="btn" type="submit">
				Click
			</button>
		</form>
	);
};

export default InputField;
