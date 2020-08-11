using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class ListaController : ControllerBase
    {
        Business.ListaRN funcaoRN = new Business.ListaRN();
        Utils.ConversorLista convert = new Utils.ConversorLista();

        [HttpPost]
        public ActionResult<Models.Response.ListaResponse> InserirListaNegra(Models.Request.ListaRequest lista)
        {
            try
            {
                Models.TbLista novo = convert.Converter(lista);

                Models.TbLista adicionado = funcaoRN.InserirRN(novo);

                Models.Response.ListaResponse result = convert.Converter(adicionado);

                return result;
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(400, ex.Message)
                );
            }
        }

        [HttpGet]
        public ActionResult<List<Models.Response.ListaResponse>> ConsultarTodos()
        {
            try
            {
                List<Models.TbLista> consultados = funcaoRN.ConsularTodosBD();

                List<Models.Response.ListaResponse> result = consultados.Select(x => 
                                                                            convert.Converter(x))
                                                                        .ToList();

                return result;
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpGet("ConsultarPorId/{idlista}")]
        public ActionResult<Models.Response.ListaResponse> consultarPorId(int idlista)
        {
            try
            {
                Models.TbLista consultado = funcaoRN.ConsultarPorId(idlista);

                Models.Response.ListaResponse result = convert.Converter(consultado);

                return result;
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpGet("ConsultarPorNome/nome")]
        public ActionResult<List<Models.Response.ListaResponse>> ConsultarPorNome(string nome)
        {
            try
            {
                List<Models.TbLista> consultados = funcaoRN.ConsularPorNomeBD(nome);

                List<Models.Response.ListaResponse> result = consultados.Select(x => 
                                                                            convert.Converter(x))
                                                                        .ToList();
                
                return result;


            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(404, ex.Message)
                );
            }
        }

        [HttpPut("{idlista}")]
        public ActionResult<Models.Response.ListaResponse> AlterarPorId(int idlista, Models.Request.ListaRequest lista)
        {
            try
            {
                Models.TbLista novo = convert.Converter(lista);

                Models.TbLista alterado = funcaoRN.AlterarBD(idlista, novo);

                Models.Response.ListaResponse result = convert.Converter(alterado);

                return result;
                
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(400, ex.Message)
                );
            }
        }


        [HttpDelete("{idlista}")]
        public ActionResult RemoverPorId(int idlista)
        {
            try
            {
                funcaoRN.RemoverBD(idlista);

                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.Erro(400, ex.Message)
                );
            }
        }
    }
}