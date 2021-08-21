**<center>NGUỒN: Contest tháng 12/2017 Day 1 (Hiếu Hưng Yên - Second Round of Hải phòng)</center>**
<br>

Dọc đường cao tốc Hà Nội – Hải Phòng cần đào ~N~ cái hố (để trồng cây tỏa bóng mát) bởi ~M~ cái máy xúc. Các hố đánh số từ ~1~ đến ~N~, các máy xúc đánh số từ ~1~ đến ~M~. Thời gian để một máy xúc đào xong ~1~ hố là ~b~ phút.

Ban đầu, máy xúc thứ ~i~ đang ở hố ~p_i~. Trước khi bắt đầu công việc hoặc sau khi đào xong hố của mình, máy xúc có thể di chuyển sang một hố bất kỳ khác. Thời gian để một máy xúc bất kỳ di chuyển giữa hai hố liền kề là ~a~ phút. Như vậy, thời gian để máy xúc di chuyển từ hố ~i~ sang hố ~j~ là ~a\times |i-j|~.

**Yêu cầu**: Tính thời gian ít nhất để các máy xúc đào được ~N~ hố.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương ~N,M\ (1≤N,M≤10^5)~
- Dòng tiếp theo chứa hai số nguyên dương ~a,b\ (1≤a,b≤10^6)~
- Dòng tiếp theo chứa ~M~ số nguyên dương, số thứ ~i~ có giá trị ~p_i\  (1≤p_i≤N)~ tương ứng máy xúc ~i~ đang ở hố ~p_i~.
Các số trên một dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên dương duy nhất là thời gian nhỏ nhất để các máy xúc đào xong ~N~ hố.

## Ví dụ:
#### Dữ liệu vào:
```
3 4
2 3
3 1 3 3
```
#### Dữ liệu ra:
```
5
```

#### Dữ liệu vào:
```
2 1
1 1
1
```

#### Dữ liệu ra:
```
3
```

## Giới hạn:
- ~50\%~ số test tương ứng với ~50\%~ số điểm có ~N,M≤100~.