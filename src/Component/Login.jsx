import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    useEffect(() => {

    }, [])
    return (
        <>
   <style dangerouslySetInnerHTML={{__html: "\n        body {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmin-height: 100vh;\n\n\tfont-family: system-ui;\n}\n\nimg {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n.card-login {\n\twidth: 375px;\n\tmin-height: 370px;\n\tbackground: #f3f3f3;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tborder-radius: 32px;\n\tpadding-inline: 10px;\n}\n\n.card-img {\n\talign-self: center;\n\tmax-width: 200px;\n\theight: 200px;\n\tposition: absolute;\n\ttop: -80px;\n}\n\n.nome-do-prato,\n.preco-do-prato {\n\tfont-size: 32px;\n\tcolor: #292929;\n\ttext-align: center;\n}\n\n.descricao-prato {\n\tfont-size: 18px;\n\tcolor: #616161;\n\ttext-align: center;\n}\n\n.submit{\n  padding: 7px 138px;\n  font-size: 16px;\n}\n.input-group input{\n  text-align: left;\n}\n " }} />

            <div className="card-login p-4">
                <div className="card-img">
                    <img src="https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/pizza-png-transparente.png?resize=600%2C600&ssl=1" alt="Imagem do prato" />
                </div>
                <div className="input-group mb-3 ">
                    <span className="input-group-text me-2" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Enter your email" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-4 ">
                    <span className="input-group-text me-2" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Enter your password " aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div>
                    <button type="button" class="btn btn-warning submit mb-3">Submit</button>
                </div>
                <Link to="/register">Registered</Link>
            </div>
        </>
    )
}

export default Login;