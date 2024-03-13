const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const ageGroupInput = document.getElementById('age-group');
const bmiValueEl = document.getElementById('bmi-value');
const bmiCategoryEl = document.getElementById('bmi-category');
const bmiRecommendationEl = document.getElementById('bmi-recommendation');

const calculateBmi = () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const ageGroup = ageGroupInput.value;

    if (isNaN(weight) || isNaN(height)) {
        return;
    }

    const bmi = weight / (height / 100) ** 2;

    let category, recommendation;

    if (ageGroup === 'trung-nien') {
        if (bmi < 18.5) {
            category = 'Thiếu cân';
            recommendation = 'Bạn nên ăn uống đầy đủ và tập luyện thể thao để tăng cân.';
        } else if (bmi >= 18.5 && bmi < 23) {
            category = 'Bình thường';
            recommendation = 'Bạn nên duy trì cân nặng hiện tại.';
        } else if (bmi >= 23 && bmi < 25) {
            category = 'Thừa cân';
            recommendation = 'Bạn nên giảm cân bằng cách ăn uống hợp lý và tập luyện thể thao thường xuyên.';
        } else {
            category = 'Béo phì';
            recommendation = 'Bạn cần giảm cân để cải thiện sức khỏe. Hãy tham khảo ý kiến bác sĩ để có phương pháp giảm cân phù hợp.';
        }
    } else if (ageGroup === 'trung-nien-gia-lon-tuoi') {
        if (bmi < 22) {
            category = 'Thiếu cân';
            recommendation = 'Bạn nên ăn uống đầy đủ và tập luyện thể thao để tăng cân.';
        } else if (bmi >= 22 && bmi < 27) {
            category = 'Bình thường';
            recommendation = 'Bạn nên duy trì cân nặng hiện tại.';
        } else if (bmi >= 27 && bmi < 30) {
            category = 'Thừa cân';
            recommendation = 'Bạn nên giảm cân bằng cách ăn uống hợp lý và tập luyện thể thao thường xuyên.';
        } else {
            category = 'Béo phì';
            recommendation = 'Bạn cần giảm cân để cải thiện sức khỏe. Hãy tham khảo ý kiến bác sĩ để có phương pháp giảm cân phù hợp.';
        }
    } else {
        if (bmi < 24) {
            category = 'Thiếu cân';
            recommendation = 'Bạn nên ăn uống đầy đủ và tập luyện thể thao để tăng cân.';
        } else if (bmi >= 24 && bmi < 29) {
            category = 'Bình thường';
            recommendation = 'Bạn nên duy trì cân nặng hiện tại.';
        } else if (bmi >= 29 && bmi < 32) {
            category = 'Thừa cân';
            recommendation = 'Bạn nên giảm cân bằng cách ăn uống hợp lý và tập luyện thể thao thường xuyên.';
        } else {
            category = 'Béo phì';
            recommendation = 'Bạn cần giảm cân để cải thiện sức khỏe. Hãy tham khảo ý kiến bác sĩ để có phương pháp giảm cân phù hợp.';
        }
    }

    bmiValueEl.textContent = bmi.toFixed(2);
    bmiCategoryEl.textContent = category;
    bmiRecommendationEl.textContent = recommendation;
};

const btn = document.querySelector('.btn');
btn.addEventListener('click', calculateBmi);
