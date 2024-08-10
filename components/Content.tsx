import { Counter } from "./Counter";
import { Menu } from "./Menu";
import { NewMenu } from "./NewMenu";

export interface Menu {
  name: string;
  price: number;
  isAvailable: boolean;
}

export function Content() {
  const menu: Menu[] = [];
  return (
    <div style={{ width: "100%", padding: 10, backgroundColor: "#f1faee" }}>
      <h1>Menu</h1>
      <div>
        <Counter />
        {/*<NewMenu />
        <div style={{ marginTop: 50 }}>
          <Menu />
  </div>*/}
      </div>
    </div>
  );
}
