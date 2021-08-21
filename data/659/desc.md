**<center>Nguồn: Beginner Free Contest 12</center>**

Sau khi chinh phục mọi đỉnh cao về lập trình thi đấu toàn thế giới, Cá Nóc Cắn Cáp đã nghĩ đến việc "rửa tay gác kiếm". Cá Nóc được Phượng Hoàng chỉ điểm rằng có một đại lục màu mỡ mang tên Free Contest và liền đến đó xem thử tình hình. Đại lục được xem như là một mặt phẳng tọa độ, trên đó có một vườn ~N~ cây hoa Đăng Tiêu mọc lên, cây thứ ~i~ mọc ở ô ~(x_i, y_i)~.

Với sở thích code đẹp của Cá Nóc, anh nghĩ rằng mình nên dời một số cây đi và trồng lại vào một vị trí khác để ~N~ cây đó tạo thành một hàng dọc hoặc một hàng ngang liên tiếp nhau song song với hệ trục tọa độ. Việc di chuyển cây là vô cùng khó khăn và Cá Nóc chỉ có thể di chuyển tối đa một cây một lúc và mất ~1~ đơn vị thể lực để di chuyển cây đi một đơn vị. Hơn nữa, anh chỉ có thể
di chuyển song song với hệ trục tọa độ.

Vì bận đi cắn cáp nên Cá Nóc muốn nhờ các bạn tính giúp mình tìm cách di chuyển cây trong vườn cây này sao cho lượng thể lực anh mất là nhỏ nhất có thể.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên ~N~ là số lượng cây hoa Đăng Tiêu trong vườn cây;
- ~N~ dòng tiếp theo, mỗi dòng chứa hai số nguyên ~x_i, y_i\ (−10^5 ≤ x_i, y_i ≤ 10^5)~ là tọa độ của cây thứ ~i~.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là lượng thể lực tối thiểu mà Cá Nóc cần để đạt được mong muốn của mình.

## Ví dụ:
#### Dữ liệu vào:
```
3
1 1
2 2
3 1
```

#### Dữ liệu ra:
```
1
```

#### Dữ liệu vào:
```
2
1 1
1 3
```

#### Dữ liệu ra:
```
1
```

#### Giải thích:
- Ở ví dụ ~1~: Có thể di chuyển cây ở vị trí ~(2, 2)~ sang vị trí ~(2, 1)~ và mất ~1~ đơn vị thể lực để thu được ~3~ cây trên một hàng dọc.
- Ở ví dụ ~2~: Di chuyển cây ở vị trí ~(1, 1)~ sang vị trí ~(1, 2)~ mất ~1~ đơn vị thể lực.

## Giới hạn:
- Có ~20\%~ số điểm có ~N ≤ 10~;
- Có ~30\%~ số điểm có ~N ≤ 10^3~;
- Có ~50\%~ số điểm có ~N ≤ 10^5~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)