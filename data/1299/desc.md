<!--**<center>CSP Open Contest 2</center>**-->

Dubu có mở một cửa hàng kinh doanh cho thuê xe ôtô điện cho trẻ em. Dịch vụ thuê của Dubu có ~N~ địa điểm đánh số từ ~1~ đến ~N~ và có ~M~ con đường hai chiều, con đường thứ ~i~ nối hai đỉnh ~u_i, v_i~ và nếu chạy xe qua con đường này khách hàng sẽ phải trả ~w_i~ đồng. Cứ mỗi lần cho thuê xe, Dubu sẽ cho phép khách hàng chạy một đường đi bất kì nào xuất phát từ ~1~ và kết thúc tại ~N~ mà không được đi lại con đường nào quá ~1~ lần, sau đó khách hàng phải chi trả tổng số tiền ứng với từng con đường mà khách hàng đã đi. Do dạo gần đây kinh tế khó khăn buôn bán ngày càng ế ẩm nên Dubu quyết định tung ra một đợt khuyến mãi cực shock: Sau khi khách hàng đi xong hết toàn bộ chuyến đi, khách hàng sẽ chỉ phải trả số tiền ứng với ~K~ con đường đắt nhất trong số các con đường đã đi qua (nếu khách hàng đi ít hơn ~K~ con đường thì trả tiền như bình thường, không áp dụng khuyến mãi). Dubu tự hỏi nếu đợt khuyến mãi này được tung ra thì chi phí ít nhất để di chuyển từ ~1~ đến ~N~ là bao nhiêu. Các bạn hãy giúp Dubu tính toán con số này nhé!

## Dữ liệu vào:
- Dòng đầu tiên bao gồm 3 số nguyên dương ~N, M, K~;
- ~M~ dòng tiếp theo miêu tả các con đường, dòng thứ ~i~ bao gồm ba số nguyên dương ~u_i, v_i, w_i~.

Dữ liệu đảm bảo có đường đi từ ~1~ đến ~N~.

## Dữ liệu ra:
- Gồm một số nguyên duy nhất là số tiền ít nhất phải trả để đi từ ~1~ đến ~N~.

## Ví dụ:
#### Dữ liệu vào:
```
6 7 2
1 2 6
2 3 1
2 4 3
2 5 5
3 6 10
4 6 9
5 6 8
```

#### Dữ liệu ra:
```
14
```

#### Dữ liệu vào:
```
5 5 3
2 1 1
3 2 1
4 3 1
4 5 1
1 5 2
```

#### Dữ liệu ra:
```
2
```

#### Giải thích:
- Trong test ví dụ ~1~: Chọn đường đi ~1 → 2 → 5 → 6~. Khi đó chi phí của các đường đi là ~6, 5, 8~ và
vì ta chỉ lấy ~2~ đường đi có chi phí đắt nhất nên đáp số là ~6 + 8 = 14~.

## Giới hạn:
- Trong tất cả các test, ~w_i ≤ 10^9~;

- Subtask ~\#1: 30\%~ số điểm có ~N, M ≤ 20, K ≤ N~;
- Subtask ~\#2: 70\%~ số điểm có ~N, M ≤ 3000, K ≤ N~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)