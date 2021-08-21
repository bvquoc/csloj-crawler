**<center>Nguồn: Đề thi chính thức K10 và 11 DHBB 2015-2016</center>**

Lễ hội “Hát giao duyên” được tổ chức hàng năm ở nhiều vùng quê. Năm nay, Hiếu được tham gia tổ chức lễ hội ở quê hương mình. Có $m$ chàng trai và $n$ cô gái đăng ký tham gia lễ hội, mỗi người đăng ký hát một bài hát. Chàng trai thứ $i$ đăng ký hát bài có mã số $a_i\ (i = 1, 2,…, m)$, cô gái thứ $j$ đăng ký hát bài có mã số $b_j\ (j = 1, 2, …, n)$. Sau khi thu thập đầy đủ thông tin đăng ký, Hiếu cần giúp Ban tổ chức sắp xếp các chàng trai và các cô gái thành các cặp biểu diễn, mỗi cặp gồm một chàng trai và một cô gái, mỗi người đăng ký một bài hát khác nhau. Mỗi chàng trai và mỗi cô gái chỉ thuộc không quá một cặp biểu diễn. Lễ hội sẽ càng vui và hấp dẫn nếu có được càng nhiều cặp biểu diễn.

**Yêu cầu:** Cho $a_1, a_2,…, a_m$ và $b_1, b_2,…, b_n$, hãy giúp Hiếu sắp xếp để có nhiều cặp biểu diễn nhất thỏa mãn điều kiện đặt ra.

## Dữ liệu vào:
- Dòng thứ nhất chứa hai số nguyên dương $m, n$;
- Dòng thứ hai chứa $m$ số nguyên dương $a_1, a_2,…, a_m\ (1 ≤ a_1, a_2,…, a_m ≤ 10000)$;
- Dòng thứ ba chứa $n$ số nguyên dương $b_1, b_2,…, b_n\ (1 ≤ b_1, b_2,…, b_n ≤ 10000)$.

Hai số liên tiếp trên cùng dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Dòng đầu tiên ghi một số nguyên $k$ là số lượng cặp biểu diễn nhiều nhất xếp được thỏa mãn điều kiện đặt ra.
- Dòng thứ $r$ trong $k$ dòng tiếp theo mô tả cặp biểu diễn thứ $r$, dòng chứa hai số nguyên dương $i_r$ và $j_r$ có nghĩa là chàng trai $i_r$ ghép cặp với cô gái $j_r$.

## Ví dụ:
#### Dữ liệu vào:
```
3 3
1 1 2
2 1 1
```

#### Dữ liệu ra:
```
2
1 1
3 2
```

## Giới hạn:
- Có $30\%$ số test ứng với $30\%$ số điểm có $m, n ≤ 10$;
- Có $30\%$ số test khác ứng với $30\%$ số điểm có $m, n ≤ 100$;
- Có $40\%$ số test còn lại ứng với $40\%$ số điểm có $m, n ≤ 10000$.