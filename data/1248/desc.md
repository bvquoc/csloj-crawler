**<center>Nguồn: Đề thi chính thức K10 và 11 DHBB 2015-2016</center>**

Khi còn là một học sinh chuyên Tin của trường CTN, được học về các phép toán thao tác bit, Hiếu đã sáng tạo ra nhiều bài toán để giúp các bạn trong lớp cùng luyện tập. Dưới đây là một trong số các bài toán có liên quan đến các phép toán **AND, OR, XOR**.

Cho hai số nguyên không âm $𝐿, 𝑅$ và dãy số nguyên không âm $𝑎_1, 𝑎_2, … , 𝑎_𝑛$. Hãy đếm số lượng bộ $4$ chỉ số $(𝑖_1, 𝑖_2, 𝑖_3, 𝑖_4)$ thỏa mãn hai điều kiện sau:
- $1 ≤ 𝑖_1 < 𝑖_2 < 𝑖_3 < 𝑖_4 ≤ 𝑛$;
- $𝐿 ≤ (((𝑎_{𝑖_1}\text{ AND }𝑎_{𝑖_2})\text{ OR }𝑎_{𝑖_3})\text{ XOR }𝑎_{𝑖_4}) ≤ 𝑅$.

Bạn hãy cùng Hiếu lập trình giải quyết bài toán trên.

## Dữ liệu vào:
- Dòng thứ nhất chứa ba số nguyên $𝑛, 𝐿, 𝑅\ (0 ≤ 𝐿 ≤ 𝑅 ≤ 1000)$;
- Dòng thứ hai chứa $𝑛$ số nguyên không âm $𝑎_1, 𝑎_2, … , 𝑎_𝑛\ (𝑎_1, 𝑎_2, … , 𝑎_𝑛 ≤ 1000)$.

Hai số liên tiếp trên cùng dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên là số bộ $4$ chỉ số $(𝑖_1, 𝑖_2, 𝑖_3, 𝑖_4)$ thỏa mãn điều kiện đề bài.

## Ví dụ:
#### Dữ liệu vào:
```
5 0 1
2 3 4 1 6
```

#### Dữ liệu ra:
```
1
```

## Giới hạn:
- Có $20\%$ số test ứng với $20\%$ số điểm có $𝑛 ≤ 40$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm có $𝑛 ≤ 400$ và $𝐿 = 𝑅$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm có $𝑛 ≤ 400$ và $𝐿 < 𝑅$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm có $𝑛 ≤ 4000$ và $𝐿 = 𝑅$;
- Có $20\%$ số test còn lại ứng với $20\%$ số điểm có $𝑛 ≤ 4000$ và $𝐿 < 𝑅$.