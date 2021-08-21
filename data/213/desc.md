Một đội bắn cung tham gia tập luyện. Cả đội đã tham gia bắn ~N~ lần. Bia bắn gồm ~10~ vòng tròn cùng tâm bán kính ~20, 40, 60, 80, 100, 120, 140, 160, 180, 200~ (mm). Điểm mỗi lượt bắn sẽ phụ thuộc vào vị trí tên cắm trên bia. Với mỗi lượt bắn, cung thủ sẽ nhận được số điểm là ~p~ nếu như vòng tròn nhỏ nhất chứa hoặc đi qua vị trí bắn có bán kính là ~20×(11-p)~. Nếu điểm bắn nằm ngoài tất cả vòng tròn, cung thủ sẽ không nhận được một điểm nào cả.

**Yêu cầu:** Tính tổng số điểm nhận được của tất cả ~N~ lượt bắn.

## Dữ liệu vào:
- Dòng đầu tiên là số ~T~ – số lượng test;
- ~T~ nhóm dòng tiếp theo, mỗi dòng tương ứng một yêu cầu:
	- Dòng đầu là số nguyên dương ~N~ – số lượt bắn;
	- Dòng thứ ~i~ trong ~N~ dòng tiếp theo, mỗi dòng chứa một cặp số nguyên ~(x,y)\ (-200≤x,y≤200)~ là tọa độ điểm bắn trúng trên bia lần thứ ~i~ 

Tổng số dòng không vượt quá ~10^6+1~.

## Dữ liệu ra:
- Ghi ra ~T~ dòng là kết quả các test tương ứng theo thứ tự.

## Ví dụ:
#### Dữ liệu vào:
```
1
5
32 -39
71 89
-60 80
0 0
196 89
```

#### Dữ liệu ra:
```
29
```