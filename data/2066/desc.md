**<center>Nguồn: Free Contest 8 (9)</center>**

Từ một tấm giấy ca-ro chữ nhật gồm $m$ dòng và $n$ cột, người ta đục một sô lỗ, mỗi lỗ đục mất trọn một ô vuông trên tâm giấy. Điều này sẽ làm cho một số ô trên tấm giấy bị tách rời nhau. Hai ô không bị tách rời nhau nếu chúng vẫn còn cạnh chung.
<center><img src="/images/problems/2066/remsqr.png" width=400px /></center>

**Yêu cầu:** cho kích thước tấm giây và các ô bị đục lỗ. Hãy tính số lượng mảnh giây bị tách rời nhau.

## Dữ liệu vào:
- Dòng đâu tiên chứa hai sô nguyên $m, n\ (1 \le m, n, \le 100)$;
- Mỗi dòng trong $m$ dòng tiêp theo chứa dãy gôm $n$ kí tự: `#` - tưorng ứng với ô không bị đục lỗ và `.` tưorng ứng với ô lưới bị đục lỗ.

## Dữ liệu ra:
- Ghi ra  số lượng mảnh bị căt rời.

## Ví dụ:
### Dữ liệu vào:
```
4 8
#.##.#.#
......##
#.###.##
##.##.##
```

### Dữ liệu ra:
```
6
```