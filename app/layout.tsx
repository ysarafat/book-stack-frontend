/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav/Nav";

/* Instruments */
import "./styles/globals.css";
import styles from "./styles/layout.module.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />
            <main className="max-w-7xl mx-auto">{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  );
}
