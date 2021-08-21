Bờm đang lập trình cho một cánh tay robot để có thể dùng phấn vẽ lên trên bảng đen, coi bảng đen là một mặt phẳng tọa độ chuẩn Oxy (trục Ox tăng từ trái sang phải, trục Oy tăng từ dưới lên trên).

Kế hoạch mô tả các thao tác thực hiện của cánh tay robot là một mảng gồm $N$ vector $(𝑥_1, 𝑦_1), (𝑥_2, 𝑦_2), …, (𝑥_𝑁, 𝑦_𝑁)$, trong đó $𝑥_𝑖$ và $𝑦_𝑖$ là các số nguyên chẵn. Vận hành thực tế của cánh tay robot như sau: đầu tiên nó bắt đầu đặt viên phấn từ điểm $(1, 1)$ và sau đó thực hiện $N$ bước, ở bước thứ $𝑖$, cánh tay robot sẽ di chuyển viên phấn trên bảng từ điểm hiện tại $(𝑥, 𝑦)$ đến thẳng điểm $(𝑥 + 𝑥_𝑖, 𝑦 + 𝑦_𝑖)$. Ta có thể hình dung cánh tay robot đang vẽ một loại đường đứt đoạn trong mặt phẳng tọa độ, và các đoạn của đường đứt đoạn đó chính là các vector đã cho.

Trong khi Bờm đang nghĩ về cách thay đổi kế hoạch để thay đổi đường đứt đoạn mà robot có thể vẽ ra, anh ấy tự hỏi viên phấn sẽ đi qua các trục tọa độ bao nhiêu lần với đường robot sẽ vẽ ra với kế hoạch hiện tại. Do đó Bờm muốn có một chương trình mô phỏng quá trình thay đổi kế hoạch và trả lời các truy vấn số lần đi qua trục tọa độ với đường robot vẽ ra, để anh ấy có thể dễ dàng tùy chỉnh kế hoạch cho robot theo ý mình.
<center><img src="/images/problems/1467/SIMULATION.png" width="800px" /></center>

Giả sử kế hoạch mô tả các thao tác của robot chứa $N$ vector là một mảng đánh số từ $1$ đến $N$. Ban đầu con trỏ của chương trình mô phỏng chỉ vào vị trí $1$ của mảng này. Và chương trình mô phỏng cần thực hiện các lệnh sau:
- $𝑩$: lùi con trỏ về vị trí trước vị trí hiện tại trong mảng (nếu vị trí hiện tại là $𝑖$ thì nó sẽ lùi về vị trí $𝑖 − 1$, nếu $𝑖 = 1$ thì nó giữ nguyên vị trí hiện tại);
- $𝑭$: di chuyển con trỏ đến vị trí tiếp theo trong mảng (nếu vị trí hiện tại là $𝑖$ thì nó sẽ tiến đến vị trí $𝑖 + 1$, nếu $𝑖 = 𝑁$ thì nó giữ nguyên vị trí hiện tại);
- $𝑪\ 𝒏𝒙\ 𝒏𝒚$: thay đổi vector của vị trí hiện tại của con trỏ trong mảng thành $(𝑛𝑥, 𝑛𝑦)$, với $𝑛𝑥, 𝑛𝑦$ cũng là những số nguyên chẵn;
- $𝑸$: trả lời câu hỏi của Bờm rằng với kế hoạch hiện tại thì đường robot sẽ vẽ ra có bao nhiêu lần đi qua trục tọa độ. Nếu đi qua gốc $(0, 0)$ thì được tính là $2$ lần đi qua trục tọa độ.

**Yêu cầu:** hãy xây dựng chương trình mô phỏng nêu trên.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $𝑁\ (1 ≤ 𝑁 ≤ 10^5)$;
- Tiếp theo là $𝑁$ dòng, mỗi dòng chứa hai số nguyên $𝑥_𝑖$ và $𝑦_𝑖\ (|𝑥_𝑖|, |𝑦_𝑖| ≤ 500)$;
- Dòng tiếp theo chứa số nguyên $𝑀$ là số thao tác truy vấn $(1 ≤ 𝑀 ≤ 3 × 10^5)$;
- Tiếp theo là $𝑀$ dòng, mỗi dòng mô tả một trong $4$ truy vấn trên $(|𝑛𝑥|, |𝑛𝑦| ≤ 500)$.

## Dữ liệu ra:
- Ghi ra nhiều dòng, mỗi dòng ứng với kết quả của truy vấn loại $𝑄$.

## Ví dụ:
#### Dữ liệu vào:
```
5
6 2
0 -6
-2 2
-6 -8
4 0
12
Q
C 4 4
Q
F
F
F
C -6 -2
Q
B
B
C -4 -6
Q
```

#### Dữ liệu ra:
```
3
5
5
4
```

## Giới hạn:
- Có $30\%$ số điểm có $𝑁, 𝑀 ≤ 1000$;
- Có $30\%$ số điểm có $𝑦_𝑖 = 𝑛𝑦 = 0, 𝑁 ≤ 5 × 10^4, 𝑀 ≤ 10^5$;
- Có $20\%$ số điểm có $𝑁 ≤ 5 × 10^4, 𝑀 ≤ 10^5$;
- Có $20\%$ số điểm còn lại không có ràng buộc gì thêm.