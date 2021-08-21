**<center>NGUỒN: Bài tập Bồi dưỡng HSGQG, Hải Phòng, T11/2020, Thái BK</center>**

Hệ thống mạng trên hành tinh XYZ thỏa mãn tính chất sau: Giữa hai đỉnh $x, y$ bất kỳ, tồn tại và duy nhất một đường đi đơn giữa chúng và được ký hiệu là $Path(x, y)$. Nói cách khác, hệ thống mạng có dạng hình cây. Có một số cặp nút mạng đang truyền thông tin cho nhau, gọi là các kết nối. Với $a$ là một kết nối, ký hiệu $s_a$ và $t_a$ lần lượt là đỉnh gửi và đỉnh nhận $(s_a ≠ t_a)$.

Do tính chất của mạng quang không lọc, thông tin được gửi đi từ một nút nào đó sẽ lan truyền khắp nơi. Các đỉnh nhận sẽ phân biệt gói tin dựa vào chiều truyền đến của gói tin và bước sóng của kết nối. Ta nói kết nối $a$ làm nhiễu kết nối $b$ nếu tin từ $s_a$ và từ $s_b$ đến $t_b$ theo cùng một chiều, cụ thể là $Path(s_a, t_b)$ và $Path(s_b, t_b)$ có cạnh chung.

Trên thực tế, việc gán bước sóng cho các kết nối sẽ đưa về bài toán tô màu trên đồ thị quan hệ "làm nhiễu" nói trên. Tuy nhiên trong bài này, bạn chỉ cần tính số cung của đồ thị quan hệ đó, tức là số cặp $a, b$ mà $a$ làm nhiễu $b$.

Các kết nối trên mạng có tính trực tuyến. Ban đầu chưa có kết nối nào, sau đó có thể có thêm các kết nối hoặc một số kết nối mất đi. Sau mỗi lần biến đổi như vậy, hãy tính toán và đưa ra số cặp $a, b$ mà $a$ làm nhiễu $b$.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $n, m$ là số đỉnh của cây và số thay đổi của mạng;
- $n$ dòng tiếp theo mỗi dòng ghi một cạnh của cây $u v$;
- $m$ dòng tiếp theo mỗi dòng ghi một biến đổi của mạng $k, s, t$ với $s$ là đỉnh gửi, $t$ là đỉnh nhận, $k = 0/1$ tương ứng là có thêm hoặc mất đi một kết nối từ $s$ đến $t$.

Dữ liệu đảm bảo có ít nhất một kết nối từ $s$ đến $t$ khi $k = 1$, và nếu có nhiều kết nối từ $s$ đến $t$ thì mỗi lần chỉ mất đi một trong số đó. Các đỉnh của cây được đánh số từ $1$.

## Dữ liệu ra:
- Ghi $m$ dòng là kết quả tính được sau mỗi biến đổi.

## Ví dụ:
## Dữ liệu vào:
```
7 5
1 2
1 3
2 4
2 5
3 6
3 7
0 2 7
0 3 1
0 1 4
0 4 6
1 2 7
```

#### Dữ liệu ra:
```
0
1
4
8
3
```

## Giới hạn:
- $1 ≤ n, m ≤ 10^5$;
- Subtask $\#1: 1 ≤ n, m ≤ 1000$;
- Subtask $\#2: 1 ≤ m ≤ 1000$;
- Subtask $\#3: 1 ≤ n ≤ 1000$;
- Subtask $\#4:$ Không có ràng buộc bổ sung.