import { Container } from "./styles";
import IncomeImg from "../../assets/income.svg"
import OutcomeImg from "../../assets/outcome.svg"
import TotalImg from "../../assets/total.svg"

export function Summary() {
    return(
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={IncomeImg} alt="Entradas" />
          </header>
          <strong>R$1000,00</strong>
        </div>

        <div>
          <header>
            <p>Saídas</p>
            <img src={OutcomeImg} alt="Saidas" />
          </header>
          <strong>- R$500,00</strong>
        </div>

        <div>
          <header>
            <p>Total</p>
            <img src={TotalImg} alt="Total" />
          </header>
          <strong>R$500,00</strong>
        </div>

      </Container>
    );
}