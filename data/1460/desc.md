**<center>CSP Open Contest 4</center>**

Theo dự báo, ở thế kỉ tiếp theo con người sẽ bị thiếu nước ngọt để cung cấp cho sinh hoạt hàng ngày. Để đối phó với tình trạng đó, thành phố X đã cho xây $n$ bể chứa, tất cả các bể được xây dưới dạng hình hộp chữ nhật. Đáy bể thứ $i$ được đặt ở độ cao so với mặt đất là $b_i$ và kích thước các cạnh của bể là $h_i, w_i, d_i$: tương ứng là chiều cao, chiều rộng và chiều dài của bể. Giữa các bể này có đường ống thông nhau để điều tiết nước. Trong trường hợp thiếu nước, nước ở các bể trên cao hơn sẽ chảy xuống các bể có độ cao thấp hơn.
<center><img src="/images/problems/1460/FILL.png" width="500px" /></center>

Cho thông tin về $n$ bể chứa và lượng nước $V$ . Các bạn hãy cho biết độ cao của mực nước so với mặt đất khi bơm $V$ đơn vị thể tích nước vào các bể chứa, coi như nước ở ống nối các bể là không đáng kể.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $n, V$ là số bể chứa và lượng nước sẽ bơm vào các bể;
- $n$ dòng tiếp theo, dòng thứ $i$ bao gồm $4$ số nguyên $b_i, h_i, w_i, d_i$;
- Dòng cuối cùng chứa một số nguyên $T (1 ≤ T ≤ 4)$ là subtask của test hiện tại.

## Dữ liệu ra:
- Gồm một số nguyên duy nhất (làm tròn đến hai chữ số thập phân) là độ cao của mực nước so với mặt đất. Dữ liệu đảm bảo lượng nước bơm vào không vượt quá tổng dung tích các bể.

## Ví dụ:
#### Dữ liệu vào:
```
2 4
0 1 1 2
2 1 3 1
4
```

#### Dữ liệu ra:
```
2.67
```

#### Dữ liệu vào:
```
4 78
11 7 1 5
15 6 2 2
19 4 1 8
5 8 1 5
2
```

#### Dữ liệu ra:
```
17.00
```

## Giới hạn:
- Trong tất cả các test, $n ≤ 10^5, V ≤ 2 ×10^9, 0 ≤ b_i ≤ 10^6, h_i ×w_i ×d_i ≤ 40000$;
- Subtask $\#1: 15\%$ số điểm có $b_i$ giống nhau ở tất cả các bể và $d_i$ giống nhau ở tất cả các bể.
- Subtask $\#2: 20\%$ số điểm khác có kết quả đảm bảo là số nguyên và nhỏ hơn $50$;
- Subtask $\#3: 25\%$ số điểm khác có kết quả đảm bảo là số nguyên;
- Subtask $\#4: 40\%$ số điểm còn lại không có điều kiện gì thêm.