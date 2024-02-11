// Fake data for financial goals
const goals = [
    { name: "Buy a BMW", goalAmount: 50000, amountSaved: 25000 },
    { name: "Vacation in Hawaii", goalAmount: 10000, amountSaved: 2000 },
    // Add more goals as needed
    ];

// Function to generate HTML for a financial goal
const goalRow = (goal) => {
    const percentage = (goal.amountSaved / goal.goalAmount) * 100;
    const remaining = goal.goalAmount - goal.amountSaved;
    const dasharray = `${percentage} 100`;

    return `
    <div class="bg-gray-600">
        <div class="shadow p-2">${goal.name}<br>Goal amount: $${goal.goalAmount}<br>Amount saved: $${goal.amountSaved}<br>
            <div class="w-full bg-gray-50 rounded-full dark:bg-gray-700 shadow">
                <div class="bg-lime-500 text-xs font-medium text-gray-50 text-center p-0.5 leading-none rounded-full" style="width: ${percentage}%"> ${percentage}%</div>
            </div>
        </div>
    </div>
    `;



}

// Function to create the goals section
const createGoalsSection = () => {
    const goalsContainer = document.getElementById("goalsContainer");
    goals.forEach((goal) => {
        goalsContainer.insertAdjacentHTML("beforeend", goalRow(goal));
    });
}