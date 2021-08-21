<!--
**<center>NGUỒN: Ôn HN tháng 11/2017, Đỗ Đức Đông, Thầy Ngày 2</center>**
-->

Trên hai đường thẳng song song ~L_1, L_2~ người ta đánh dấu trên mỗi đường ~n~ điểm. Các điểm trên đường thẳng ~L_1~ được đánh số ~1, 2, …, n~ từ trái qua phải, còn các điểm trên đường thẳng ~L_2~ được đánh số bởi ~d_1, d_2, …, d_n~ là một hoán vị của ~1…n~ cũng được đánh dấu từ trái qua phải <center>(hình dưới đây là một ví dụ cho ~n = 9~)</center>
<center>1-----2-----3-----4-----5-----6-----7-----8-----9		L1</center>
<center>2-----5-----3-----8-----7-----4-----6-----9-----1		L2</center>

Ta được phép nối điểm thứ ~i~ trên ~L_1~ với điểm thứ ~j~ trên ~L_2~ nếu ~|i – d_j| ≤ k~.

**Yêu cầu**: Tìm cách nối được nhiều cặp điểm nhất với điều kiện các đoạn nối không được cắt nhau.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên ~n~ và ~k~
- Dòng thứ hai chứa các số nguyên ~d_1, d_2, …, d_n~.

## Dữ liệu ra:
- Ghi ra số lượng cặp điểm nối lớn nhất tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
3 1
3 2 1
```

#### Dữ liệu ra:
```
2
```

## Giới hạn:
- **Subtask** ~\#1~: ~n ≤ 1000, k = 0~
- **Subtask** ~\#2~: ~n ≤ 1000, k ≤ 10^9~
- **Subtask** ~\#3~: ~n ≤ 10^5, k = 3~
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)