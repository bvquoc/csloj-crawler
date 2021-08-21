Hành tinh FEN nổi tiếng bởi vô số các đầm lầy kỳ lạ của mình. Mỗi đầm lầy có hình gần như là chữ nhật. Kết quả quan sát nhiều năm cho thấy đầm lầy này có thể chia thành lưới ô vuông. Mỗi ô vuông có ~4~ trạng thái khác nhau (ký hiệu là ~0,1,2,3~). Sau ~1s~ thì trạng thái ~0~ thành trạng thái ~3~, trạng thái ~1~ thành trạng thái ~0~, trạng thái ~2~ thành trạng thái ~1~, trạng thái ~3~ thành trạng thái ~2~. Trạng thái ~0~ là trạng thái không thể đứng được ở trên ô đó, các trạng thái khác là trạng thái có thể đứng được ở trên đó.

**Yêu cầu:** Cho bản đồ đầm lầy kích thước ~M×N~ ô (~M~ hàng, ~N~ cột. Các hàng được đánh số từ ~1~ đến ~M~ từ trên xuống dưới và các cột được đánh số từ ~1~ đến ~N~ từ trái sang phải), hãy xác định chương trình điều khiển đưa robot từ ô ở góc tây nam sang ô ở góc đông bắc với thời gian ngắn nhất có thể. Giả thiết rằng luôn tồn tại một hành trình như vậy. Tại thời điểm ban đầu (thời điểm ~0~) trạng thái của ô góc tây nam là ~3~. Sau ~1s~ robot có thể chuyển đến ô chung cạnh (nếu như ô này sau giây đó có trạng thái khác ~0~)  hoặc đứng yên (nêu có thể đứng được tại ô đạng đứng sau giây đó).

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên ~M, N\ (1≤M,N≤50)~;
- ~M~ dòng tiếp theo: mỗi dòng ghi ~N~ số nguyên dương trong phạm vi từ ~0~ đến ~3~.

## Dữ liệu ra:
- Ghi số ~T~ là thời gian dịch chuyển robot.
## Ví dụ:
#### Dữ liệu vào:
```
3 4
3 2 3 3
0 0 1 2
3 3 1 2
```

#### Dữ liệu ra:
```
5
```