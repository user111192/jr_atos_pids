include(Resources.id("jsblock:scripts/pids_util.js")); // Built-in script shipped with JCM
const THEADER_HEIGHT = 13;
const HEADER_HEIGHT = THEADER_HEIGHT + 2;

function create(ctx, state, pids) {
    state.tex = new GraphicsTexture(pids.width, pids.height);

    let g = state.tex.graphics;
    g.setColor(Color(0, 6, 102));
    g.fillRect(0, 0, pids.width, pids.height);
    g.setColor(Color(0, 3, 51));
    g.fillRect(2, THEADER_HEIGHT, pids.width - (2 * 2), pids.height - THEADER_HEIGHT - 2);
    g.setColor(Color(0, 0, 0));
    g.fillRect(5, HEADER_HEIGHT, pids.width - (5 * 2), pids.height - HEADER_HEIGHT - 2);

    state.tex.upload();

    state.AVAILABLE_WIDTH = Math.floor((pids.width - (5 * 2)) / 9 * 2) / 2;

    print("Available width: " + state.AVAILABLE_WIDTH);
}

function render(ctx, state, pids) {
    Texture.create("Background")
        .texture(state.tex.identifier)
        .size(pids.width, pids.height)
        .draw(ctx);

    if (SCRIPT_INPUT.preset_id == "") {
        Text.create("Error text").text("未设置配置文件路径，无法渲染。").scale(1.25).size(pids.width - (5 * 2), 9).scaleXY().pos(5, HEADER_HEIGHT).draw(ctx);
        return;
    }

    Text.create("Test").text("Hello world! 1234567890").scale(1.25).size(pids.width - (5 * 2), 9).scaleXY().pos(5, HEADER_HEIGHT).draw(ctx);

    // Arrivals
    // for (let i = 0; i < pids.rows; i++) {
    //     let rowY = HEADER_HEIGHT + (i * 16.75);
    //     let customMsg = pids.getCustomMessage(i);
    //     if (customMsg != "") {
    //         Text.create("Custom Text")
    //             .text(TextUtil.cycleString(customMsg))
    //             .scale(1.25)
    //             .size(pids.width - (5 * 2), 9)
    //             .scaleXY()
    //             .pos(5, rowY)
    //             .draw(ctx);
            
    //     } else {
    //         let arrival = pids.arrivals().get(i);
    //         if (arrival != null && !pids.isRowHidden(i)) {
    //             Texture.create("LRT Circle White")
    //                 .texture("mtr:textures/block/white.png")
    //                 .pos(7.5, rowY + 1.5)
    //                 .size(18, 6)
    //                 .draw(ctx);

    //             Texture.create("LRT Circle Colored")
    //                 .texture("jsblock:textures/lrr.png")
    //                 .color(arrival.routeColor())
    //                 .pos(5, rowY)
    //                 .size(23, 10)
    //                 .draw(ctx);

    //             Text.create("LRT Number Text")
    //                 .text(arrival.routeNumber())
    //                 .scale(0.55)
    //                 .centerAlign()
    //                 .size(26, 9)
    //                 .scaleXY()
    //                 .pos(16.5, rowY + 3)
    //                 .draw(ctx);

    //             Text.create("Arrival Destination")
    //                 .text(TextUtil.cycleString(arrival.destination()))
    //                 .scale(1.25)
    //                 .size(36, 9)
    //                 .scaleXY()
    //                 .pos(30, rowY)
    //                 .draw(ctx);

    //             if (!pids.isPlatformNumberHidden()) {
    //                 Texture.create("Platform Circle")
    //                     .texture("jsblock:textures/block/pids/plat_circle.png")
    //                     .pos(79, rowY - 1)
    //                     .size(10.5, 10.5)
    //                     .color(0xD2A808) // Hong Kong LRT Network Color
    //                     .draw(ctx);

    //                 Text.create("Platform Circle Text")
    //                     .text(arrival.platformName())
    //                     .pos(84, rowY + 1)
    //                     .size(9, 9)
    //                     .scaleXY()
    //                     .scale(0.9)
    //                     .centerAlign()
    //                     .color(0xFFFFFF)
    //                     .draw(ctx);
    //             }

    //             Text.create("ETA Text")
    //                 .text(TextUtil.cycleString(PIDSUtil.getETAText(arrival.arrivalTime())))
    //                 .scale(1.25)
    //                 .size(30, 9)
    //                 .scaleXY()
    //                 .rightAlign()
    //                 .pos(pids.width - 8, rowY)
    //                 .draw(ctx);
    //         }
    //     }
    // }
}

function dispose(ctx, state, pids) {
    state.tex.close();
    // print("Goodbye World ^^;"); // Only for testing, can remove
}