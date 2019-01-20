import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="description" content="A site for my programing portfolio" />
                    <meta charSet="utf-8" />
                    <meta name="robots" content="noindex, nofolows" />
                    <meta name="viewport" content="width=device-width" />

                    <link rel="stylesheet" href="/static/css/reset.css" />

                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"></link>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>

                    <link rel="stylesheet" href="/static/css/webmation.css" />

                    <link rel="stylesheet" href="/static/css/nprogress.css" />
                    <link rel="stylesheet" href="/static/css/ReactToastify.css" />
                    <link rel="stylesheet" href="/static/css/react-bootstrap-table2.min.css" />

                    {/* <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link> */}
                </Head>
                <body>
                    <Main />
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
                    <NextScript />
                </body>
                <style global jsx>{`
                    
                `}</style>
            </html>
        )
    }
}
