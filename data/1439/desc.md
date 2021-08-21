**<center>NGUỒN: Bài tập thầy Bình ôn Bắc Giang</center>**

Trong phòng mổ có ~N~ dụng cụ khác nhau (dao, kéo, chỉ khâu, bông,...) đánh số lần lượt ~1, 2, ...., N~. Trong quá trình mổ tùy theo bệnh nhân mà bác sĩ sử dụng các dụng cụ này theo các thứ tự khác nhau. Tuy nhiên, trên khay đựng dụng cụ không thể xếp quá ~K~ dụng cụ (vì nếu để nhiều hơn sẽ dễ gây nhầm lẫn hoặc không đảm bảo an toàn).

Mr Bean vô tình lạc vào bệnh viện và trở thành y tá phụ mổ bất đắc dĩ của một ca mổ. Trên tay anh ta có danh sách các dụng cụ mổ phải phục vụ theo trình tự thời gian. Nếu dụng cụ mổ mà bác sĩ cần đến chưa có ở trên khay thì Mr Bean phải lấy nó ở trên giá đồ xuống (đồng thời anh ta cũng có thể cất một dụng cụ đang có ở trên khay lên giá). Để tránh bị lộ, Mr Bean muốn số lần đi lại lấy/cất dụng cụ mổ là ít nhất có thể được (Bean vốn là một anh chàng vụng về mà !!!).

Hãy tính xem Mr Bean phải mất tối thiểu bao nhiêu lần di chuyển để lấy/cất đồ.

## Dữ liệu vào:
- Dòng đầu tiên ghi ba số ~N, K, M\ (1≤K≤N≤10^5, 1≤M≤5\times 10^5)~ lần lượt là số dụng cụ, số dụng cụ tối đa có thể đặt lên khay và số dụng cụ được sử dụng trong ca mổ.
- ~M~ dòng tiếp theo, mỗi dòng ghi một số nguyên dương trong phạm vi từ ~1~ đến ~N~ lần lượt là số hiệu các dụng cụ mà bác sỹ sử dụng theo thứ tự.

## Dữ liệu ra:
- Ghi ra một số nguyên là số lần ít nhất Mr Bean phải đi lấy/cất dụng cụ trong quá trình phục vụ ca mổ.

## Ví dụ:
#### Dữ liệu vào:
```
3 2 7
1
2
3
1
3
1
2
```

#### Dữ liệu ra:
```
4
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)