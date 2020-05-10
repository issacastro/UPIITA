import Head from "next/head";
import Navigation from "./navigation";

const Container = (props) => (
  <div>
    <Head>
      <title>UPIITA - Appweb</title>
      <link
        rel="icon"
        type="image/png"
        href="https://www.encb.ipn.mx/assets/files/encb/img/escudos/logo-ipn.png"
      ></link>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/lux/bootstrap.min.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" />
    </Head>
    <Navigation page={props.page} />
    <div className="container p-3">{props.children} </div>
  </div>
);
export default Container;
