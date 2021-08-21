**<center>NGUỒN: VOI 2019 - 2020</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Đất nước AZ. có ~n~ thành phố vừa phải hứng chịu một trận động đất mạnh. Nhiều tòa nhà và các công trình công cộng bị phá hủy, làm tê liệt toàn bộ hệ thống giao thông giữa các thành phố. Sau những nỗ lực của chính phủ, có ~n-1~ con đường hai chiều nối giữa ~n~ thành phố được sửa chữa để đảm bảo tính liên thông đi lại giữa ~n~ thành phố. Các thành phố được đánh số từ ~1~ đến ~n~. Con đường thứ ~k\ (k = 1, 2, …,  n- 1)~ nối hai thành phố ~i_k~ và ~j_k~ có độ đài ~d(i_k, j_k)~ km. Theo dự báo, trong thời gian tới có thể xảy ra một trận động đất nữa, do đó, chính phủ đang lên kế hoạch ứng phó. Theo thông tin thu nhận được, hiện tại thành phố ~i\ (i = 1, 2, ..., n)~ đang có ~p_i~ nhân viên cứu hộ. Chính phủ muốn điều chỉnh lại số lượng nhân viên cứu hộ ở các thành phố sao cho độ chênh lệch nhân viên cứu hộ giữa các thành phố là nhỏ nhất. Độ chênh lệch nhân viên cứu hộ giữa các thành phố được tính bằng hiệu số nhân viên cứu hộ ở thành phố có nhiều nhân viên nhất với thành phố có ít nhân viên nhất.

Tại mỗi thành phố đều có xe dùng để vận chuyển nhân viên cứu hộ (giả thiết số xe tại mỗi thành phố đủ nhiều để phục vụ vận chuyển), mỗi xe có khả năng vận chuyển không quá ~c~ nhân viên cứu hộ. Nếu muốn vận chuyển ~q~ nhân viên cứu hộ từ thành phố ~i~ sang thành phố ~j~ bằng đường nối trực
tiếp thì thành phố ~i~ sẽ cần ~\left\lceil {\frac{q}{c}} \right\rceil~ xe, trong đó ~\left\lceil {x} \right\rceil~ là số nguyên nhỏ nhất không nhỏ hơn ~x~ và độ dài đường đi mà mỗi xe phải đi là ~d(i, j)~. Sau khi đến thành phố ~j~, các nhân viên cứu hộ sẽ ở lại hoặc có thể tiếp tục di chuyển sang thành phố khác bằng xe của thành phố ~j~. Để tiết kiệm chi phí vận chuyển, chính phủ cần xây dựng phương án vận chuyển sao cho tổng độ dài đường đi của các xe dùng để vận chuyền là ngắn nhất mà vẫn thỏa mãn yêu cầu nêu trên.

**Yêu cầu:** Cho thông tin về ~n-1~ con đường và số nhân viên cứu hộ tại mỗi thành phố. Hãy tìm phương án vận chuyển nhân viên cứu hộ mà tổng độ dài đường đi của các xe dùng vận chuyên là ngắn nhất mà vẫn đảm bảo yêu cầu độ chênh lệch nhân viên cứu hộ giữa các thành phố là nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~n~ và ~c~ ~(c ≤ 10^6)~;
- Dòng thứ hai gồm ~n~ số nguyên không âm ~p_1, p_2, …, p_n\ (p_i≤10^6)~;
- Dòng thứ ~k~ trong số ~n-1~ dòng tiếp theo chứa ba số nguyên ~i_k, j_k, d(i_k, j_k)~ thỏa mãn ~1≤i_k < j_k≤n~ và ~0< d(i_k, j_k)≤10^6~.

Các số trên cùng một dòng cách nhau bởi dấu cách.

## Dữ liệu ra:
- Dòng đầu chứa một số nguyên là tổng độ dài ngắn nhất của các xe dùng để vận chuyển đảm bảo yêu cầu độ chênh lệch nhân viên cứu hộ giữa các thành phố là nhỏ nhất;
- Dòng thứ hai chứa số nguyên ~s~ là số lượng đợt vận chuyển;
- Dòng thứ ~h~ trong ~s~ dòng tiếp theo chứa ba số nguyên dương ~i_h, j_h, q_h~, nghĩa là thành phố ~i_h~ sẽ có các xe vận chuyển ~q_h~ nhân viên cứu hộ sang thành phố ~j_h~ (giá trị ~q_h~ phải nhỏ hơn hoặc bằng số lượng nhân viên của thành phố ~i_h~ tại thời điểm vận chuyển).

## Giới hạn:
- Có ~20\%~ số test ứng với ~20\%~ số điểm của bài thỏa mãn điều kiện: ~n= 3~;
- ~40\%~ số test khác ứng với ~40\%~ số điểm của bài thỏa mãn điều kiện: ~n ≤ 3000~ và mỗi thành phố có không quá ~2~ đường nỗi trực tiếp tới thành phố khác;
- ~40\%~ số test còn lại ứng với ~40\%~ số điểm của bài thỏa mãn điều kiện: ~n ≤ 3000~.

Đối với mỗi test, nếu thí sinh đưa ra đúng giá trị tổng độ dài ngắn nhất của các xe dùng để vận chuyển, thí sinh sẽ được ~70\%~ số điểm của test đó, nếu tiếp tục đưa ra được một phương án vận chuyển đúng, thí sinh sẽ được ~30\%~ số điểm còn lại.

## Vị dụ:
#### Dữ liệu vào:
```
4 10
12 9 49 51
1 2 1
1 3 1
2 4 2
```

#### Dữ liệu ra:
```
7
3
3 1 19
4 2 20
1 2 1
```

#### Giải thích:
<center><img src="/images/problems/1523/equake.png" width=400px></center>

- Cần hai xe vận chuyển ~19~ nhân viên cứu hộ từ thành phố ~3~ về thành phố ~1~ và hai xe vận chuyển ~20~ nhân viên cứu hộ từ thành phố ~4~ về thành phố ~2~, cuối cùng cần một xe vận chuyển ~1~ nhân viên từ thành phố ~1~ sang thành phố ~2~. Độ chênh lệch nhân viên cứu hộ giữa các thành phố bằng ~1~ và tổng độ dài đường đi của các xe là ~2×1 + 2×2 + 1×1 = 7~ (km).
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)