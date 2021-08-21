Rôn là một người cởi mở và vì vậy có rất nhiều bạn bè. Một buổi tối, khi mở Mail, Rôn ngạc nhiên một cách thú vị khi thấy Mail của một người bạn cũ thời niên thiếu mời tới họp mặt. Không một chút lưỡng lự, Rôn nhận lời. Biết rằng bạn mình say mê sưu tập tiền cổ và trong bộ sưu tập còn thiếu một đồng bạc đặc biệt thời trung cổ.

Nước của Rôn có ~n~ thành phố, đánh số từ ~1~ đến ~n~ nối với nhau bởi ~m~ đường hai chiều, mỗi con đường nối một cặp hai thành phố khác nhau và mỗi cặp thành phố có không quá một con đường nối trực tiếp. Rôn ở thành phố ~A~, người bạn - ở thành phố ~B\ (A ≠ B)~. Qua thông tin mà bạn bè và internet cung cấp Rôn biết danh sách ~k~ thành phố có bán đồng tiền này và giá bán ở mỗi thành phố. Internet cũng cho biết chi phí ~d_{ij}~ đi từ thành phố ~i~ tới thành phố ~j~ nếu hai thành phố này có đường nối trực tiếp.

Rôn quyết định sẽ lái xe đi từ ~A~ tới ~B~ và sẽ mua đồng tiền cổ ở một trong số các thành phố trên đường đi. Vấn đề là phải chọn đường đi sao cho tổng chi phí đi cộng với chi phí mua đồng tiền cổ là nhỏ nhất.

**Yêu cầu:** Xác định tổng chi phí nhỏ nhất để thực hiện kế hoạch của Rôn.

## Dữ liệu vào:
- Dòng đầu tiên chứa ba số nguyên ~n, m~ và ~k\ (2 ≤ n ≤ 5000, 1 ≤ m ≤ 100000, 1 ≤ k ≤ n)~;
- Dòng thứ hai chứa hai số nguyên ~A~ và ~B~;
- Dòng thứ ba chứa ~k~ cặp số nguyên, mỗi cặp xác định thành phố và giá bán đồng tiền cổ (nằm trong phạm vi từ ~1~ đến ~10^9~), ở các thành phố khác nhau – giá khác nhau;
- Mỗi dòng trong ~m~ dòng còn lại chứa ba số nguyên ~i, j~ và ~d_{ij}\ (1 ≤ d_{ij} ≤ 10^5)~.

## Dữ liệu ra:
- Đưa ra hai số nguyên – chi phí nhỏ nhất tìm được và số hiệu cửa hàng cần mua đồng tiền cổ, nếu có nhiều thành phố mua đồng tiền cổ với chi phí nhỏ nhất thì chọn thành phố có đồng tiền trị giá nhất, nếu có nhiều thành phố thỏa mãn với trị giá đồng tiền cổ như nhau thì chọn thành phố có chỉ số nhỏ nhất.

## Ví dụ:
<center><img src="/images/problems/591/MONEY.png" width="500px" /></center>

#### Dữ liệu ra:
```
5 7 4
1 4
1 100 4 50 3 10 2 55
1 2 10
5 3 42
1 3 30
2 4 50
3 4 70
2 5 24
4 5 21
```

#### Dữ liệu vào;
```
103 3
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)