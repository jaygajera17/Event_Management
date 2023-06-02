using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OpenAI_API.Completions;
using OpenAI_API;

namespace EventApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OpenAIController : ControllerBase
    {
        [HttpGet]
        [Route("UseChatGPT")]
        public async Task<IActionResult> UseChatGPT(string doubt)
        {
            string outputResult = "";
            var openai = new OpenAIAPI("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");
            CompletionRequest completionRequest = new CompletionRequest();
            completionRequest.Prompt = doubt;
            completionRequest.Model = OpenAI_API.Models.Model.DavinciText;
            completionRequest.MaxTokens = 1024;

            var completions = await openai.Completions.CreateCompletionAsync(completionRequest);

            foreach (var completion in completions.Completions)
            {
                outputResult += completion.Text;
            }

            return Ok(outputResult);
        }
        }
    }
