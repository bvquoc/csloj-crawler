**<center>NGUỒN: VOI 2019 - 2020</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Một giàn đèn trang trí kích thước $m×n$, các hàng đánh số từ $1$ đến $m$ từ trên xuống dưới, các cột đánh số từ $1$ đên $n$ từ trái sang phải. Ô nằm giao giữa hàng $r$ và cột $c$ gọi là ô $(r, c)$. Trên mỗi ô có một bóng đèn, mỗi bóng đèn có ba trạng thái: hoặc tắt, hoặc bật sáng màu xanh, hoặc bật sáng màu đỏ. Có $k$ ô phân biệt $(r_1, c_1), (r_2, c_2),… (r_k, c_k)$ của giàn đèn, mỗi ô có một công tắc điều khiển. Khi tác động vào công tắc của ô $(r_t c_t)$ thì những đèn nằm trong các ô thuộc hình chữ nhật có ô trái trên là $(r_t, c_t)$ và ô phải dưới là $(x_t, y_t)$ sẽ đổi trạng thái $(t = 1, 2, …, k)$. Cụ thể, các đèn nằm trong các ô $(u, v)$ mà $r_t≤u≤x_t$, và $c_t≤v≤y_t$, sẽ thay đổi theo quy tắc: nếu đèn đang ở trạng thái tắt sẽ chuyển sang trạng thái bật sáng màu xanh, nếu đang ở trạng thái bật sáng màu xanh sẽ chuyển sang trạng thái bật sáng màu đỏ, còn nếu đèn đang ở trạng thái bật sáng màu đỏ sẽ chuyển sang trạng thái tắt. Mỗi công tắc có thể tác động nhiêu lần.

**Yêu câu:** Cho thông tin trạng thái ban đầu các đèn trên giàn và các công tắc. Hãy tìm cách đưa tất cả các đèn về cùng một trạng thái bật sáng màu xanh hoặc bật sáng màu đỏ với số lần tác động là ít nhât.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương $m, n, k\ (k ≤ m × n)$;
- Dòng thứ $i$ trong số $m$ dòng tiếp theo chứa $n$ số nguyên nhận giá trị $0, 1$ hoặc $2$. Số thứ $j$ $(j =1, 2,..., n)$ mô tả trạng thái đèn ở ô $(i, j)$ là tắt, bật sáng màu xanh hoặc bật sáng màu đỏ tương ứng với các giá trị $0$, $1$ hoặc $2$;
- Dòng thứ $t$ trong số $k$ dòng tiếp theo chứa bốn số nguyên dương $r_t, c_t, x_t, y_t$ $1≤r_t≤x_t≤m; 1≤c_t≤y_t≤n$.

Các số trên cùng một dòng cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra duy nhất một số nguyên là số lần tác động ít nhất để các đèn về cùng một trạng thái sáng màu xanh hoặc sáng màu đó, nếu không tôn tại cách tác động thì ghi số $-1$;

## Giói hạn:
- Có $40\%$ số test ứng với $40\%$ số điểm của bài thỏa mãn điều kiện: $m = 1; n \le 10$;
- $40\%$ số test khác ứng với $40\%$ số điểm của bài thỏa mãn điều kiện: $m × n < 10^3$;
- $20\%$ số test còn lại ứng với $20\%$ số điểm của bài thỏa mãn điều kiện: $m × m < 10^5$.

## Ví dụ:
#### Dữ liệu vào:
```
2 3 3
2 1 0
2 1 0
1 1 2 3
1 2 2 3
1 3 2 3
```

#### Dữ liệu ra:
```
2
```

#### Giải thích:
Trước tiên tác động vào công tắc ở ô $(1, 3)$, sau đó tác động vào công tắc ở ô $(1, 2)$, khi đó tất cả các đèn trên giàn đều sáng màu đỏ.