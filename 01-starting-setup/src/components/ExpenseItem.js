import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Indurance';
    const expensiveAmount = 294.67;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div calssName="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">€{expensiveAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
