import { useState, useEffect } from "react";

export default function User() {
  const [list, setList] = useState<any[]>([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ]);

  useEffect(() => {
    setList(list);
  }, [list]);

  return (
    <>
      <div>User</div>
      <div>
        {list.map((item: { id: number; name: string }) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
}
