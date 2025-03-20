import {calculateInvestmentResults,formatter} from '../utils/investment.js';

export default function ResultTable({userInput}) {
const annualData = calculateInvestmentResults(userInput);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
            {annualData.map((data,index)=>(
                <tr key={index}>
                    <td>{data.year}</td>
                    <td>{formatter.format(Math.floor(data.valueEndOfYear))}</td>
                    <td>{formatter.format(Math.floor(data.interest))}</td>
                    <td>{formatter.format(Math.floor(data.interest*data.year))}</td>
                    <td>{formatter.format(userInput.initialInvestment +( data.year * userInput.annualInvestment))}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )

}