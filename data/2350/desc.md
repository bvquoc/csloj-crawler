<!--**<center>NGUỒN: Free Contest FYT Code Cup Day 2</center>**-->

Vương quốc FYT có ~N~ thành phố liên thông với nhau, được nối với nhau bằng ~N −1~ tuyến đường hai chiều, tuyến đường hai chiều thứ ~i~ có độ dài ~w_i~ (km) nối hai thành phố ~u_i~ và ~v_i~. Mỗi thành phố có duy nhất một thành viên của vương quốc FYT đang sinh sống. Để lên kế hoạch tổ chức kỳ tuyển sinh FYT, quốc vương của vương quốc FYT quyết định sẽ tổ chức một cuộc họp ở một thành phố bất kỳ trong ~N~ thành phố và yêu cầu tối thiểu ~K~ thành viên cùng tham gia.

Mọi thứ có vẻ như diễn ra rất thuận lợi, tuy nhiên do ảnh hưởng của dịch bệnh COVID nên mọi người không thể tự di chuyển được giữa những thành phố. Trước nguy cơ cuộc họp quan trọng sẽ bị hủy, quốc vương cấp tốc nhờ thuộc hạ của mình thuê một chiếc xe có sức chứa không giới hạn. Tuy nhiên, chiếc xe này lại rất tốn xăng. Để di chuyển quãng đường dài ~1~ km, chiếc xe này cần ~1~ lít xăng. Ngoài chi phí thuê xe là ~100~ đồng vàng, quốc vương còn phải tốn thêm chi phí để thuê bình chứa xăng. Với mỗi lít tăng thêm của bình chứa xăng, quốc vương phải trả thêm ~1~ đồng vàng. May mắn thay, ở mỗi thành phố đều có một trạm xăng. Với quyền uy của quốc vương, ngài tất nhiên sẽ được đổ xăng miễn phí.

Nhằm tiết kiệm thời gian, quốc vương quyết định di chuyển như sau: để đón ~T~ thành viên, quốc vương sẽ chọn một thành phố ~S~ bất kỳ và đón thành viên ở thành phố này, di chuyển qua ~T − 1~ thành phố khác, mỗi thành phố đúng một lần để đón ~T − 1~ thành viên còn lại. Ngoài tiết kiệm thời gian, quốc vương còn muốn tiết kiệm chi phí: quốc vương muốn tổng chi phí thuê xe và thuê bình chứa xăng là nhỏ nhất có thể.

**Yêu cầu:** Là thuộc hạ thân tín của quốc vương, bạn hãy giúp quốc vương xác định chi phí tối thiểu để thuê xe và thuê bình chứa xăng để đón được ít nhất K thành viên từ các thành phố khác nhau. Lưu ý, nếu chỉ cần tối thiểu ~1~ thành viên tham gia cuộc họp thì không cần phải thuê xe.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên không âm ~N~ và ~K~;
- ~M~ dòng tiếp theo, dòng thứ ~i~ chứa ~3~ số nguyên dương ~u_i, v_i~ và ~w_i~.

## Dữ liệu ra:
- In ra một số nguyên không âm duy nhất là chi phí tối thiểu để đón được ít nhất ~K~ thành viên từ các thành phố khác nhau. Nếu không có cách di chuyển thỏa mãn, in ra ~-1~.

## Ví dụ:
#### Dữ liệu vào:
```
6 3
1 3 3
1 6 10
2 5 5
3 4 4
3 5 1
```

#### Dữ liệu ra:
```
103
```

#### Dữ liệu vào:
```
6 4
1 3 3
1 6 10
2 5 5
3 4 4
3 5 1
```

#### Dữ liệu ra:
```
105
```

#### Dữ liệu vào:
```
6 5
1 3 3
1 6 10
2 5 5
3 4 4
3 5 1
```

#### Dữ liệu ra:
```
110
```

#### Dữ liệu vào:
```
6 6
1 3 3
1 6 10
2 5 5
3 4 4
3 5 1
```

#### Dữ liệu ra:
```
-1
```

#### Giải thích:
<center><img src="/images/problems/2350/KMEMBER.png" width="350px" /></center>

- Trong ví dụ thứ nhất, chuyến đi tối ưu bắt đầu từ thành phố thứ ~1~, di chuyển theo thứ tự ~1-3-5~, chi phí thuê xe là ~100~, chi phí thuê bình chứa xăng là ~3~ (do tuyến đường dài nhất là ~1-3~ có độ dài là ~3~). Vì vậy, tổng chi phí là ~100+3=103~;

- Trong ví dụ thứ hai, chuyến đi tối ưu bắt đầu từ thành phố thứ ~1~, di chuyển theo thứ tự ~1-3-5-2~. Tổng chi phí là là ~100+5=105~ (do tuyến đường dài nhất là ~2-5~ có độ dài là ~5~);
- Trong ví dụ thứ ba, chuyến đi tối ưu là ~6-1-3-5-2~. Tổng chi phí là ~100+10=110~;
- Trong ví dụ thứ tư, không tồn tại chuyến đi thỏa mãn đi qua ít nhất ~6~ thành phố.

## Giới hạn:
- ~1 ≤ N ≤ 10^5, 1 ≤ K ≤ N, 1 ≤ u_i, v_i ≤ N, u_i ≠ v_i, ∀1 ≤ i < N, 1 ≤ w_i ≤ 10^9~, đồ thị thỏa mãn tính liên thông.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)