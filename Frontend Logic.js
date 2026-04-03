async function submitLaundry() {
    let id = document.getElementById("id").value;

    await fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    });

    alert("Laundry Submitted");
}

async function completeLaundry() {
    let id = document.getElementById("completeId").value;
    let shelf = document.getElementById("shelf").value;

    await fetch("/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, shelf })
    });

    alert("Laundry Completed");
}

async function checkStatus() {
    let id = document.getElementById("studentId").value;

    let res = await fetch(`/status/${id}`);
    let data = await res.json();

    if (data.status === "ready") {
        document.getElementById("result").innerText =
            `✅ Ready! Shelf No: ${data.shelf}`;
        alert("Laundry Ready!"); // notification simulation
    } else {
        document.getElementById("result").innerText =
            "⏳ Still Processing";
    }
}