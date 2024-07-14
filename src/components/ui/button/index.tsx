type ButtonProps = {
    text: string;
  };
  
  export default function Button({ text }: ButtonProps) {
    return (
      <button className="w-[160px] h-[40px] text-lg mt-4 bg-gray-200 hover:bg-gray-300 border border-stone-400 rounded-2xl overflow-hidden">
        {text}
      </button>
    );
  }