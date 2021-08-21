**<center>CSP Open Contest 5</center>**

Huyện Bụng Bự có ~N~ thị xã được đánh số từ ~1~ đến ~N~ và có ~M~ con đường một chiều, được đánh số từ ~1~ đến ~M~ và con đường thứ ~i~ nối từ thị xã ~u_i~ đến thị xã ~v_i~.

Để ủng hộ đồng bào miền Trung lũ lụt thì có một cuộc thi chạy marathon gây quỹ sẽ được tổ chức trong huyện và sẽ có ~M~ đội đua (được đánh số từ ~1~ đến ~M~) sẽ tham gia tranh tài tại cuộc thi này.

Hiện tại ban tổ chức cuộc thi đang phải đối mặt với một vấn đề hết sức khó khăn đó là chọn ra một lộ trình cho cuộc thi này. Ban tổ chức rất mong muốn lộ trình chạy sẽ xuất phát từ một thị xã bất kì, đi qua một số con đường (mỗi con đường chỉ được phép đi duy nhất một lần) và quay lại thị xã xuất phát. Việc này tưởng chừng có vẻ khá đơn giản nhưng lại nảy sinh một vấn đề như sau: Trong ngày diễn ra kì thi, cổ động viên của đội thứ ~c_i~ sẽ vây kín xung quanh con đường thứ ~i~, và điều này là lợi thế chỉ dành riêng cho đội ~c_i~.

Tất nhiên ban tổ chức vẫn rất muốn rằng việc chọn lộ trình chạy sẽ phải đảm bảo công bằng cho tất cả các thí sinh tham gia. Vì vậy ban tổ chức đã phải có thêm một yêu cầu như sau: Trong lộ trình chạy, không có ~2~ con đường liên tiếp nào bị vây kín bởi cổ động viên đến từ một đội nào đó (con đường đầu tiên và con đường cuối cùng của lộ trình cũng phải được đảm bảo như vậy). Các bạn hãy giúp ban tổ chức tìm ra lộ trình gồm nhiều đường nhất thỏa mãn hai điều kiện trên nhé!

## Dữ liệu vào:
- Dòng đầu tiên bao gồm hai số nguyên dương ~N, M\ (2 ≤ N, M ≤ 2 × 10^5)~ miêu tả số lượng thị xã và số lượng con đường (số lượng đội đua).
- ~M~ dòng tiếp theo, dòng thứ ~i~ bao gồm ba số ~u_i, v_i, c_i~ miêu tả con đường thứ ~i~ nối từ thị xã ~u_i~ đến thị xã ~v_i~ và sẽ bị vây xung quanh bởi cổ động viên của đội ~c_i\ (1 ≤ u_i, v_i ≤ N, 1 ≤ c_i ≤ M, u_i ≠ v_i)~.

## Dữ liệu ra:
- Nếu không tồn tại lộ trình đi hợp lệ, in ra ~-1~. Ngược lại, dòng đầu tiên in ra số ~k\ (2 ≤ k ≤ M)~ là số lượng con đường trong lộ trình, ~k~ dòng tiếp theo in ra ~k~ số ~e_1, e_2, …, e_k~ là chỉ số của các con đường theo đúng lộ trình đi. Các số ~e_i~ phải đôi một phân biệt. Nếu có nhiều lộ trình hợp lệ, in ra một lộ trình bất kì.

## Ví dụ:
#### Dữ liệu vào:
```
5 8
1 4 1
2 4 1
4 5 2
3 2 2
5 3 1
3 2 3
5 2 2
2 1 3
```

#### Dữ liệu ra:
```
4
3 5 6 2
```

#### Dữ liệu vào:
```
4 5
1 2 2
2 3 1
2 4 4
4 1 2
3 1 2
```

#### Dữ liệu ra:
```
-1
```

#### Dữ liệu vào:
```
2 3
1 2 1
1 2 2
2 1 1
```

#### Dữ liệu ra:
```
2
2 3
```

## Giới hạn:
- Subtask ~\#1: 15\%~ số điểm có ~M ≤ 16~;
- Subtask ~\#2: 35\%~ số điểm khác có ~M ≤ 5000~;
- Subtask ~\#3: 50\%~ số điểm còn lại không có điều kiện gì thêm.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)