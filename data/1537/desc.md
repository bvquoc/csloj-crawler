**<center>NGUỒN : VNU-OI 2020</center>**

Sau khi được học về cây tìm kiếm nhị phân (BST - Binary Search Tree), Nghĩa rất thích thú với cấu trúc dữ liệu này và quyết định tạo ra một cấu trúc dữ liệu cho riêng mình, đặt tên là ABST. Cụ thể, cấu trúc dữ liệu ABST có dạng là một cây nhị phân và mỗi nút đều được gán một khóa sao cho với mỗi nút ~k~:
- Mọi khóa trên cây con trái đều nhỏ hơn hoặc bằng khóa trên nút ~k~;
- Mọi khóa trên cây con phải đều lớn hơn hoặc bằng khóa trên nút ~k~.

Một lần, Nghĩa bắt gặp một hình vẽ là một cây nhị phân, trên mỗi nút có một khóa là một số nguyên. Nghĩa tò mò điều chỉnh giá trị khóa tại các nút để cây nhận được có tính chất như cây ABST. Mỗi bước Nghĩa được phép tăng hoặc giảm giá trị khóa đi một đơn vị ở một nút.

**Yêu cầu:** Hãy tính số bước ít nhất giúp Nghĩa điều chỉnh giá trị khóa tại các nút để cây nhận được có tính chất như cây ABST.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên ~n~ là số nút của cây;
- Tiếp theo là ~n~ dòng, dòng thứ ~i\ (1 ≤ i ≤ n)~ chứa ba số nguyên không âm ~k_i, l_i, r_i\ (k_i, l_i, r_i ≤ n)~, trong đó ~k_i~ là giá trị khóa trên nút ~i~, ~l_i~ là nút con trái, ~r_i~ là nút con phải. Nếu ~l_i = 0~ có nghĩa nút ~i~ không có con trái, tương tự, nếu ~r_i = 0~ nghĩa là nút ~i~ không có con phải.

## Dữ liệu ra:
Gồm một dòng chứa một số nguyên là số bước ít nhất giúp Nghĩa điều chỉnh giá trị khóa tại các nút để cây nhận được có tính chất như cây ABST. Lưu ý rằng, cây sau khi điều chỉnh giá trị khóa ở các nút có thể âm.

## Ví dụ:
#### Dữ liệu vào:
```
4
4 0 0
3 1 4
2 0 0
4 3 0
```

#### Dữ liệu ra:
```
2
```

#### Giải thích:
<center><img src="/images/problems/1537/ABST.png" width="250px" /></center>

## Giới hạn:
- Subtask ~\#1: 20\%~ số điểm có ~n = 3~;
- Subtask ~\#2: 30\%~ số điểm khác có ~n ≤ 30~;
- Subtask ~\#3: 20\%~ số điểm khác có ~n ≤ 3000~;
- Subtask ~\#4: 30\%~ số điểm còn lại có ~n ≤ 300000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)