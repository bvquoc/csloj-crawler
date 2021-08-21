**<center>NGUỒN: PreVNOI Ⅶ Lần 2 (ONLINE 2017)</center>**
<!--
## <center>Chỗ này xàm xí, bỏ qua</center>
Các bạn thân mến! Khi bước đi trên con đường đời, bạn sẽ gặp rất nhiều người tên Bảo như Gia Bảo, Long Bảo, Thung Bảo,.... Họ có tính cách và độ trẻ trâu khác nhau, nhưng trẻ trâu nhất vẫn là Thành Bảo.

Thành Bảo đang trải qua những ngày tháng đen tối nhất của đời mình. Vốn đã là người mất Lương từ lâu, ngay ngày đầu lớp ~11~, Bảo lại phải nhận hàng loạt tin sét đánh. Không chỉ bị cô giáo miễn nhiệm chức lớp trưởng, mà đau đớn hơn, Bảo còn bị cô thuyên chuyển công tác tới vùng xa xôi hẻo lánh. Thế là Bảo không thể đóng vai sói ca chuyên ngồi cạnh săm soi nhòm ngó bài vở cô bạn Liều Kinh suốt một năm trời. Đến trường đối với cậu ta giờ như một cơn ác mộng, khi  phải chứng kiến một con Rồng Biển hàng ngày bên cạnh chăm sóc cô gái xinh xắn, cung cấp đầy đủ bánh mỳ và sữa. Cảm động trước tình cảm chân thành, cô gái trao lại trái tim và khối óc của mình cho Rồng Biển.

Cay đắng nhìn phân thận người tình một năm sắp lọt vào tay Rồng Biển quái ác, Bảo vùng lên đòi cô chủ nhiệm trả lại chỗ ngồi cũ cho mình. Nhưng để làm được điều đó, Bảo cần phải giải bài toán sau đây. Các bạn hãy giúp Bảo nhé.
## <center>Đây mới là chỗ cần đọc</center>
-->

Cho một cây gồm ~N~ đỉnh, mỗi đỉnh có một màu khác nhau. Gọi ~d\left(u, v\right)~ là số màu phân biệt trên đường đi từ đỉnh ~u~ tới đỉnh ~v~. Đặt ~sum(u) = d(u, 1) + d(u, 2) + … + d(u, N)~. Hãy tính ~sum(u)~ với mọi đỉnh ~u~ bất kì.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên ~N~.
- Dòng thứ hai chứa ~N~ số nguyên ~c_1,c_2,…,c_N~ lần lượt là màu của các đỉnh.
- ~N - 1~ dòng tiếp theo, mỗi dòng chứa hai số nguyên ~u~ và ~v~ mô tả một cạnh của cây nối giữa hai đỉnh ~u~ và ~v~. Dữ liệu vào đảm bảo đồ thị có dạng là cây.

## Dữ liệu ra:
- Gồm ~N~ dòng, dòng thứ ~i~ chứa số nguyên ~sum(i)~.

## Ví dụ:

#### Dữ liệu vào:
```
5
1 2 3 2 3
1 2
2 3
2 4
1 5
```

#### Dữ liệu ra:
```
10
9
11
9
12
```

#### Giải thích:
<center><img src="/images/problems/1074/colorgraph.svg" width=1080></center>

## Giới hạn:
- ~1≤c_i≤10^5~ với mọi ~1≤i≤N~
- Subtask #~1~: ~10\%~ số điểm: ~N\le300~
- Subtask #~2~: ~18\%~ số điểm: ~N\le5000~
- Subtask #~3~: ~12\%~ số điểm: Mọi đỉnh có cùng màu
- Subtask #~4~: ~24\%~ số điểm: Không tồn tại hai đỉnh cùng màu
- Subtask #~5~: ~36\%~ số điểm: Không có ràng buộc gì thêm.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)